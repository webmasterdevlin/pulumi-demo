## Go in Pulumi

#### requirements
 - install [Go](https://golang.org/doc/install)
 - install [dep](https://golang.github.io/dep/docs/installation.html)

```sh
$ mkdir quickstart && cd quickstart
$ pulumi plugin install resource azure 1
$ pulumi new azure-go
$ dep ensure
```