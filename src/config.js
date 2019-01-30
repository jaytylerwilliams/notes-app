export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-jtw"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://dsna32q77h.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_FVA7slmf8",
    APP_CLIENT_ID: "1cts35fn6n4aecguogiia68v4e",
    IDENTITY_POOL_ID: "us-east-1:5326bb72-1a97-4d5f-9b3c-2031d160c140"
  }
};
