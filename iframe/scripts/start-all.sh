(
  trap 'kill 0' SIGINT;
  npm start --prefix ..\\remote-product &
  npm start --prefix ..\\remote-dashboard &
  npm start --prefix ..\\remote-blog &
  npm start --prefix ..\\remote-user &
  npm start --prefix ..\\host
)
