
const DB_USER ="root";
const DB_PASSWORD ="rootpassword";
const DB_NAME = "elearingplatform";
const CLUSTER_HOST ="apidemo.rkti4.mongodb.net"

exports.DB_URI= `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

