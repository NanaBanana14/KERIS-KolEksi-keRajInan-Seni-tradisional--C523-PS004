const SkipToContent = () => {
  const skipToContentButton = document.getElementById('skip-to-content');
  if (skipToContentButton) {
    // eslint-disable-next-line space-before-function-paren
    skipToContentButton.addEventListener('click', (event) => {
      event.preventDefault();
      const mainContent = document.getElementById('mainContent');
      mainContent.tabIndex = -1;
      mainContent.focus();
      mainContent.tabIndex = 0;
    });
  }
};

export default SkipToContent;