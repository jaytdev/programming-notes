# AWS Concepts

What is the cloud? The internet is the cloud. The cloud is "a computer that is somewhere else." It's a data center.

AWS is as cloud services provider, also known as IaaS (Infrastructure as a Service).

Personal uses of the cloud:
- Backups
- Sharing (across devices)


Cloud terminology:
1. High Availability (access)
2. Fault Tolerant (backup)
3. Scalability (grow)
4. Elasticity (shrink)
5. Instance

VPC is short for **virtual private cloud**. It's your private section of AWS where you can place AWS resources and allow/restrict access to them.

EC2 is short for **elastic cloud compute**. Think of it as a server/computer. It's a virtual machine/computer. This server is referred to as an EC2 _instance_. To "provision" an instance means to create one.

A common use of EC2 is for web hosting. An EC2 instance is good for any kind of "processing" activity.

RDS is an AWS provisioned database service. Common use cases:
- Customer account info
- Inventory catalog

S3 stands for Simple Storage Service. It's an unlimited storage bucket.
Common uses:
- Mass storage
- Long-term storage

Global Infrastructure:
- Each AWS region is made up of **availability zones**
- An availabiliy zone is a physical location that holds an AWS data center.
- There are many availability zones within a region to allow high availability and fault tolerance