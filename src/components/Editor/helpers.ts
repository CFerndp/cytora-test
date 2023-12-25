export const getLanguageBasedOnFileExtension = (path: string) => {
  const extension = path.split('.').pop();
  switch (extension) {
    case 'js':
      return 'javascript';
    case 'ts':
      return 'typescript';
    case 'html':
      return 'html';
    case 'css':
      return 'css';
    case 'json':
      return 'json';
    default:
      return 'javascript';
  }
};
