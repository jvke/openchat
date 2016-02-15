var client = {
  peer: '',
  conn: ''
};
function connectToPeer(pid) {
  if (pid) {
    client.conn = client.peer.connect(pid);
  }
}

function createPeer(uid) {
  if (uid) {
    client.peer = new Peer(uid,{key: 'lwjd5qra8257b9'});

    client.peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);

      // Receive messages
      client.conn.on('data', function(data) {
        console.log('Received', data);
      });

      // Send messages
      client.conn.send('Hello!');
    });
  }
}

$('button').click(function(ev) {
  ev.preventDefault();
  var uid = $('input[name="uid"]').val();
  var pid = $('input[name="pid"]').val();

  createPeer(uid);
  connectToPeer(pid);
});
