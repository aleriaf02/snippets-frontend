echo "Building Angular app for $NODE_ENV"

build_dev='ng build'
if [ $NODE_ENV = "development" ]; then
 echo "running $build_dev ..."
 eval "$build_dev"
fi

build_prod='ng build --configuration production'
if [ $NODE_ENV = "production" ]; then
 echo "running $build_prod ..."
 eval "$build_prod"
fi
