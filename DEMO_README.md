# Customer Demo Setup
This demo involves building and deploy a back end REST API(Quarkus app) a front end UI (Patternfly app) 
and then using a script to populate some data to the database.

### Setup env variables
```bash
export NAMESPACE=<project name>
```
    
### login into you cluster
```bash
oc login -u kubeadmin -p XXXXXXXXX
```

### Deploy Backend REST API
deploy:
```bash
oc --namespace ${NAMESPACE} new-app quay.io/quarkus/ubi-quarkus-native-s2i:20.0.0-java8~https://github.com/ddonahue007/quarkus-json.git#dd-s2i-backend --name=customer-demo-api
```

expose:
```bash
oc --namespace ${NAMESPACE} expose svc/customer-demo-api
```
    
### Deploy Frontend UI 
set api url to variable:
```bash
export API_URL="http://$(my-oc get route | grep customer-demo-api | awk '{print $2}')"    
```

deploy: (note: you can exclude API_PORT from the below command if you are running on port 80)
```bash
oc --namespace ${NAMESPACE} new-app openshift/nodejs:12~https://github.com/ddonahue007/patternfly-react-seed.git#dd-s2i-frontend \
            --build-env API_HOST=${API_URL} \
            --build-env API_PORT=<api_port> \
            --name=customer-demo-ui
```
expose:
```bash
oc --namespace ${NAMESPACE} expose svc/customer-demo-ui
````

get url from front end:
```bash
oc --namespace ${NAMESPACE} get route | grep customer-demo-ui | awk '{print "http://"$2}'
```
now you can go to the frontend url --> contacts 
you should just see a header. To add contacts lets run the following

### populate data
```bash
./scripts/populate_customer.sh
```


