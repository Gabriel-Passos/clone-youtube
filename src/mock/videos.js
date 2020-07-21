const videos = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=N0dLXdi32fk',
    title: 'CAIU NA VILA ZTEY FUZ1LA',
    channel: 'yeTz',
    views: 161,
    datePosting: 2,
    channelAvatar: 'https://yt3.ggpht.com/a/AATXAJw_GYrqLEKfrME73E-aABFTCYGFKzlR8fikR3VMng=s100-c-k-c0xffffffff-no-rj-mo',
    videoThumb: 'https://i.ytimg.com/vi/N0dLXdi32fk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAG3Vpy6z8YIpy3gSc2I_8sJxPTiw',
    videoTime: '16:00'
  },
  {
    id: 2,
    url: 'https://www.youtube.com/watch?v=Za1b31HyRPY',
    title: 'NÃO AGUENTO MAIS JOGAR CONTRA ZAC!',
    channel: 'yeTz',
    views: 161,
    datePosting: 2,
    channelAvatar: 'https://yt3.ggpht.com/a/AATXAJw_GYrqLEKfrME73E-aABFTCYGFKzlR8fikR3VMng=s100-c-k-c0xffffffff-no-rj-mo',
    videoThumb: 'https://i.ytimg.com/vi/Za1b31HyRPY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwK7O-53nQ2kTbEaVdgSZw8MtFuA',
    videoTime: '16:00'
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=fzQssrqHGeE',
    title: 'JEAN MAGO É TUDO DE BOM! ELE JOGA DE TUDO',
    channel: 'yeTz',
    views: 262,
    datePosting: 4,
    channelAvatar: 'https://yt3.ggpht.com/a/AATXAJw_GYrqLEKfrME73E-aABFTCYGFKzlR8fikR3VMng=s100-c-k-c0xffffffff-no-rj-mo',
    videoThumb: 'https://i.ytimg.com/vi/fzQssrqHGeE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA2mxCUnCrEPbE5z6onjJwXgMzIaw',
    videoTime: '16:00'
  },
  {
    id: 4,
    url: 'https://www.youtube.com/watch?v=2J7vtEg7hnQ',
    title: 'EU ACHO QUE O JOVIRONE VAI SE DAR BEM NO COMPETITIVO!',
    channel: 'yeTz',
    views: 210,
    datePosting: 3,
    channelAvatar: 'https://yt3.ggpht.com/a/AATXAJw_GYrqLEKfrME73E-aABFTCYGFKzlR8fikR3VMng=s100-c-k-c0xffffffff-no-rj-mo',
    videoThumb: 'https://i.ytimg.com/vi/2J7vtEg7hnQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDWojUa0eEUa4NKQbElbjHeBgUDrg',
    videoTime: '16:00'
  },
  {
    id: 5,
    url: 'https://www.youtube.com/watch?v=N0dLXdi32fk',
    title: 'CAIU NA VILA ZTEY FUZ1LA',
    channel: 'yeTz',
    views: 161,
    datePosting: 2,
    channelAvatar: 'https://yt3.ggpht.com/a/AATXAJw_GYrqLEKfrME73E-aABFTCYGFKzlR8fikR3VMng=s100-c-k-c0xffffffff-no-rj-mo',
    videoThumb: 'https://i.ytimg.com/vi/N0dLXdi32fk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAG3Vpy6z8YIpy3gSc2I_8sJxPTiw',
    videoTime: '16:00'
  },
  {
    id: 6,
    url: 'https://www.youtube.com/watch?v=Za1b31HyRPY',
    title: 'NÃO AGUENTO MAIS JOGAR CONTRA ZAC!',
    channel: 'yeTz',
    views: 161,
    datePosting: 2,
    channelAvatar: 'https://yt3.ggpht.com/a/AATXAJw_GYrqLEKfrME73E-aABFTCYGFKzlR8fikR3VMng=s100-c-k-c0xffffffff-no-rj-mo',
    videoThumb: 'https://i.ytimg.com/vi/Za1b31HyRPY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwK7O-53nQ2kTbEaVdgSZw8MtFuA',
    videoTime: '16:00'
  },
  {
    id: 7,
    url: 'https://www.youtube.com/watch?v=fzQssrqHGeE',
    title: 'JEAN MAGO É TUDO DE BOM! ELE JOGA DE TUDO',
    channel: 'yeTz',
    views: 262,
    datePosting: 4,
    channelAvatar: 'https://yt3.ggpht.com/a/AATXAJw_GYrqLEKfrME73E-aABFTCYGFKzlR8fikR3VMng=s100-c-k-c0xffffffff-no-rj-mo',
    videoThumb: 'https://i.ytimg.com/vi/fzQssrqHGeE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA2mxCUnCrEPbE5z6onjJwXgMzIaw',
    videoTime: '16:00'
  },
  {
    id: 8,
    url: 'https://www.youtube.com/watch?v=2J7vtEg7hnQ',
    title: 'EU ACHO QUE O JOVIRONE VAI SE DAR BEM NO COMPETITIVO!',
    channel: 'yeTz',
    views: 210,
    datePosting: 3,
    channelAvatar: 'https://yt3.ggpht.com/a/AATXAJw_GYrqLEKfrME73E-aABFTCYGFKzlR8fikR3VMng=s100-c-k-c0xffffffff-no-rj-mo',
    videoThumb: 'https://i.ytimg.com/vi/2J7vtEg7hnQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDWojUa0eEUa4NKQbElbjHeBgUDrg',
    videoTime: '16:00'
  }
];

export default videos;