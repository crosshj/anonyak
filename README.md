# anonyak
anonymous chat for team meetings #WIP #POC #MVP

[Try It Online](https://crosshj.com/anonyak/)

### TODO
- [ ] users can "like" each comment
- [ ] host use-cases for each comment
	- mark resolved
	- group
	- annotate
	- focus
	- mind-map
- [ ] QR Code or link to client from host
- [ ] unique ID for each hosted session
- [ ] flesh out this arch pattern
	- https://joarleymoraes.com/serverless-long-running-http-requests/
- [ ] mind map tools
- [X] needs a memory
	- integrate dynamo
	- [time to live](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html)
- [X] host needs to poll (or other method to update)
- [X] client needs to submit some data and save it

### Reference
[serverless examples](https://github.com/serverless/examples)
[IAM deployment user](https://michael-timbs.medium.com/creating-a-serverless-deploy-user-with-aws-iam-b2053227534)
