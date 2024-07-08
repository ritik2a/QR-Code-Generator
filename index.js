try {
  $(document).ready(function() {
    $('#submit-button').on('click', function() {
      const inputText = $('#input-text').val();
      console.log(inputText)
        if (inputText.trim() !== '') {
          const size = '512x512';
          const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}&size=${size}`;
          $('#img').attr('src', qrCodeUrl);
      } else {
        alert('Please enter some text before submitting.');
      }
    });
  });
} catch(error) {
  alert(error);
}