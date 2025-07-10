document.addEventListener("DOMContentLoaded", () => {
  const codeBlocks = document.querySelectorAll('.code');

  codeBlocks.forEach(block => {
    let typingTimeout;
    let currentIndex = 0;

    const fullCode = block.getAttribute('data-code');

    function typeLetter() {
      if (currentIndex <= fullCode.length) {
        block.textContent = fullCode.slice(0, currentIndex);
        currentIndex++;
        typingTimeout = setTimeout(typeLetter, 15);
      }
    }

    function startTyping() {
      clearTimeout(typingTimeout);
      currentIndex = 0;
      block.textContent = '';
      typeLetter();
    }

    function stopTyping() {
      clearTimeout(typingTimeout);
      block.textContent = fullCode;
    }

    block.addEventListener('mouseenter', startTyping);
    block.addEventListener('mouseleave', stopTyping);

    block.textContent = fullCode;
  });
});
