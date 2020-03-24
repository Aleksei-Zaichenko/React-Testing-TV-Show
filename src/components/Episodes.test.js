import React from 'react';
import { render } from "@testing-library/react";

import Episodes from './Episodes';

test("renders without errors", () => {
    // arrange, act, assert all at once
    render(<Episodes episodes={[]} />);
});
  
const episodes= [ 
              {   
                  id: 553946,
                  url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
                  name: "Chapter One: The Vanishing of Will Byers",
                  season: 1,
                  number: 1,
                  airdate: "2016-07-15",
                  airtime: "",
                  airstamp: "2016-07-15T12:00:00+00:00",
                  runtime: 60,
                  image: {
                      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
                      original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
                  },
                  summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest."
              },
              {
                  id: 578663,
                  url: "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
                  name: "Chapter Two: The Weirdo on Maple Street",
                  season: 1,
                  number: 2,
                  airdate: "2016-07-15",
                  airtime: "",
                  airstamp: "2016-07-15T12:00:00+00:00",
                  runtime: 60,
                  image: {
                      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
                      original: "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
                  },
                  summary: "While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will."
              },
              {   
                  id: 909340,
                  url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
                  name: "Chapter One: The Vanishing of Will Byers",
                  season: 2,
                  number: 1,
                  airdate: "2016-07-15",
                  airtime: "",
                  airstamp: "2016-07-15T12:00:00+00:00",
                  runtime: 60,
                  image: {
                      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
                      original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
                  },
                  summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest."
              },
              {
                  id: 909342,
                  url: "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
                  name: "Chapter Two: The Weirdo on Maple Street",
                  season: 2,
                  number: 2,
                  airdate: "2016-07-15",
                  airtime: "",
                  airstamp: "2016-07-15T12:00:00+00:00",
                  runtime: 60,
                  image: {
                      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
                      original: "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
                  },
                  summary: "While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will."
              },
              {   
                  id: 1576469,
                  url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
                  name: "Chapter One: The Vanishing of Will Byers",
                  season: 3,
                  number: 1,
                  airdate: "2016-07-15",
                  airtime: "",
                  airstamp: "2016-07-15T12:00:00+00:00",
                  runtime: 60,
                  image: {
                      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
                      original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
                  },
                  summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest."
              },
              {
                  id: 1576470,
                  url: "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
                  name: "Chapter Two: The Weirdo on Maple Street",
                  season: 3,
                  number: 2,
                  airdate: "2016-07-15",
                  airtime: "",
                  airstamp: "2016-07-15T12:00:00+00:00",
                  runtime: 60,
                  image: {
                      medium: "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
                      original: "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
                  },
                  summary: "While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will."
              }
]

test("Episodes renders the list of episodes", () => {
  const { queryAllByTestId, queryByTestId, rerender } = render(
    <Episodes episodes={[]} />
  );
  expect(queryAllByTestId(/episode-list/i)).toHaveLength(0);

  rerender(<Episodes episodes={episodes} />);
  expect(queryAllByTestId(/episode-list/i)).toHaveLength(6);
});