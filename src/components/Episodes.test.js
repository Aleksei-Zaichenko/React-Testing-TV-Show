import React from 'react';
import { render } from "@testing-library/react";

import Episodes from './Episodes';

test("renders without errors", () => {
    // arrange, act, assert all at once
    render(<Episodes episodes={[]} error="" />);
  });
