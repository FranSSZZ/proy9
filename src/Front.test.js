import React from 'react';
import { render } from '@testing-library/react';
import Expe from './components/ExperienciaP';

test('Expe component renders without errors', () => {
  render(<Expe />);
  // Si la prueba llega hasta este punto sin lanzar ningún error, se considera exitosa.
});

