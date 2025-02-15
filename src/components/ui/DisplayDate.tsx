import React from 'react';

interface DisplayDateProps {
  timestamp: string;
}

const DisplayDate: React.FC<DisplayDateProps> = ({ timestamp, ...rest }) => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <span {...rest}>{formattedDate}</span>
  );
};

export default DisplayDate;
