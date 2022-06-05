import { Component, OnInit } from '@angular/core';
import { File } from '../../../shared/models/file/file.model';
import { Snippet } from '../../../shared/models/snippet/snippet.model';
import { Topic } from '../../../shared/models/topic/topic.model';
import { Observable } from 'rxjs';
import { ResponseWrapper } from '../../../shared/models/responseWrapper/response-wrapper.model';
import { TopicService } from '../../../core/services/topics/topic.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { SnippetsService } from '../../../core/services/snippets/snippets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-view',
  templateUrl: './creation-view.component.html',
  styleUrls: ['./creation-view.component.scss'],
})
export class CreationViewComponent implements OnInit {
  snippet: Snippet;
  topics: Topic[] = [];
  responseWrapper!: Observable<ResponseWrapper<Topic>>;
  selectedTopics: Topic[] = [];

  selectedItem: number = 0;
  code: string = '';
  editionMode: boolean = true;
  validation: boolean = false;
  files: File[] = [];
  currentFile: File = new File('', '');

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    topic_ids: new FormArray([]),
    files: new FormArray([]),
  });

  constructor(
    private topicService: TopicService,
    private toastService: HotToastService,
    private snippetService: SnippetsService,
    private router: Router
  ) {
    this.snippet = new Snippet('', '', '', [], [], 0, 0);
  }

  ngOnInit(): void {
    this.setProperties();
  }

  setSelected(i: number) {
    this.selectedItem = i;
    this.currentFile = this.files[i];
  }

  setProperties(): void {
    this.topics = this.topicService.getTopics();
    this.responseWrapper = this.topicService.getObsResponseTopics();
    this.responseWrapper.subscribe((elem) => {
      this.topics = elem.results;
    });
    this.files.push(new File('', ''));
  }

  setHighlight($event: FocusEvent, index: number) {
    let code = ($event.target as HTMLInputElement).value;
    code.replace('>', '&gt;');
    code.replace('<', '&lt;');
    this.files[index].content = code;
    this.currentFile.content = code;
    this.editionMode = false;
    this.validate();
  }

  setValues($event: FocusEvent, index: number) {
    this.files[index].name = ($event.target as HTMLInputElement).value;
    this.validate();
  }

  setEditionMode() {
    this.editionMode = true;
  }

  removeFile(i: number) {
    if (this.files.length > 1) {
      this.files.splice(i, 1);
    } else {
      this.toastService.error('At least one file must be fulfilled!');
    }
  }

  addSelectedTopics($event: Event) {
    let idTopic = ($event.target as HTMLOptionElement).value;
    let topic = this.topics.find((item) => item.id === Number(idTopic));
    if (topic != undefined) {
      this.selectedTopics.push(topic);
    }
    this.removeElementFromArray(Number(idTopic));
    this.validate();
  }

  removeSelectedTopics($event: MouseEvent) {
    let name = ($event.target as HTMLDivElement).textContent;
    let topic = this.selectedTopics.find((item) => item.name === name);
    if (topic != undefined) {
      let topicId = topic.id;
      this.topics.push(topic);
      this.selectedTopics.forEach((value, index) => {
        if (value.id == topicId) this.selectedTopics.splice(index, 1);
      });
    }
    this.validate();
  }

  submit(): void {
    this.selectedTopics.forEach((topic) => {
      this.form.value.topic_ids.push(topic.id);
    });
    this.form.value.files = this.files;
    this.snippetService.create(this.form.value).subscribe(() => {
      this.toastService.success('Snippet created!');
    });
    this.router.navigate(['/']).then();
  }

  addFiles() {
    this.files.push(new File('', ''));
  }

  validate() {
    this.validation = false;
    this.files.forEach((value) => {
      if (value.name != '') {
        if (value.content != '') {
          this.selectedTopics.forEach((value) => {
            if (value.id != null) {
              this.validation = true;
            }
          });
        }
      }
    });
  }

  private removeElementFromArray(id: number) {
    this.topics.forEach((value, index) => {
      if (value.id == id) this.topics.splice(index, 1);
    });
  }
}
