import React from 'react';

const List = () => {
  const items = [
    { Work: "Design UI for dashboard", navigate: "https://www.google.com/" },
    { Work: "Fix bug in login page", navigate: "https://www.google.com/" },
    { Work: "Update user data API", navigate: "https://www.youtube.com/" },
    { Work: "Prepare presentation", navigate: "https://www.google.com/" },
    { Work: "Design UI for dashboard", navigate: "https://www.google.com/" },
    { Work: "Fix bug in login page", navigate: "https://www.google.com/" },
    { Work: "Update user data API", navigate: "https://www.youtube.com/" },
    { Work: "Prepare presentation", navigate: "https://www.google.com/" }
  ];

  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <div className="max-w-md mx-auto h-60 overflow-y-auto bg-blue-400 shadow-md rounded-lg p-4 text-white">
     
      <ul className="space-y-2 list-disc list-inside">
        {items.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-blue-900 transition-colors"
            onClick={() => handleClick(item.navigate)}
          >
            {item.Work}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
