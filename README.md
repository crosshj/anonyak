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
- [X] needs a memory
	- maybe integrate dynamo
	- [maybe TTL](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html)
- [X] host needs to poll (or other method to update)
- [X] client needs to submit some data and save it

### Reference
[serverless examples](https://github.com/serverless/examples)
[IAM deployment user](https://michael-timbs.medium.com/creating-a-serverless-deploy-user-with-aws-iam-b2053227534)
