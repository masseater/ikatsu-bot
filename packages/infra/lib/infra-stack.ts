import * as cdk from "@aws-cdk/core";
import * as ec2 from "@aws-cdk/aws-ec2"
import * as ecs from "@aws-cdk/aws-ecs"
import * as ecr from "@aws-cdk/aws-ecr"

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'MainVPC');

    new ecs.Cluster(this, 'MainCluster')

    // The code that defines your stack goes here
    new ec2.Instance(this, 'ec2ForEcsTask', {
      vpc: vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: ec2.MachineImage.latestAmazonLinux()
    })

    new ecr.Repository(this, 'DiscordBotRepository')
  }
}
