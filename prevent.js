document.onkeydown = function(e) {
  if (e.ctrlKey && e.key === 'u' || e.ctrlKey && e.key === 's') {
    return false;
  }
};

const customMessage = document.getElementById('custom-message');

        function showCustomMessage(message, duration = 2000) {
            customMessage.textContent = message; // Set the message text
            customMessage.classList.remove('hidden'); // Make it visible
            customMessage.classList.add('show');     // Animate its opacity

            
            setTimeout(() => {
                customMessage.classList.remove('show');
                
                setTimeout(() => {
                    customMessage.classList.add('hidden');
                }, 300); 
            }, duration);
        }

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault(); 
            showCustomMessage('Nice try buddy!');
        });

        
         document.body.style.userSelect = 'none';
         document.body.style.webkitUserSelect = 'none'; 
         document.body.style.mozUserSelect = 'none';    