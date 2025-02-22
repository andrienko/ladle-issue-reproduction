import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'globals.css';

import { Button } from '@common/ui';

const rootWrapper = document.getElementById('root');
if (!rootWrapper) {
  throw new Error('An element with "root" id was not found on page. Can not mount the UI.');
}

function Root() {
  return (
    <StrictMode>
      <Button>Click me!</Button>
    </StrictMode>
  );
}

createRoot(rootWrapper).render(<Root />);
