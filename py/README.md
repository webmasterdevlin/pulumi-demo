## Python in Pulumi

#### requirements
 - Install [Python version 3.6 or later](https://www.python.org/downloads/)

```sh
$ mkdir quickstart && cd quickstart
$ pulumi new azure-python
$ virtualenv -p python3 venv
$ source venv/bin/activate
$ pip3 install -r requirements.txt
$ pulumi up
$ pulumi destroy
```