export interface Service {
  e: string;
  title: string;
  age: string;
  short: string;
  desc: string;
  list: string[];
}

export interface Game {
  e: string;
  title: string;
  desc: string;
  badge: 'go' | 'cs';
  badgeTxt: string;
  id: string | null;
}

export interface Video {
  cat: string;
  catLbl: string;
  bg: string;
  e: string;
  title: string;
  dur: string;
  yt: string;
}

export interface VideoCat {
  id: string;
  lbl: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Review {
  stars: string;
  text: string;
  name: string;
  age: string;
  av: string;
}
