function openEnvelope() {
  var envelope = document.querySelector('.envelope');
  var message = document.querySelector('.message');
  envelope.style.width = "200px";
  message.style.display = "block";
}


onload = () => {
  document.body.classList.remove("container");
};


