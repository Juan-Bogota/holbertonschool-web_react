import React from 'react';

export const NotificationItem = ({ type, html, value }) => {
  let li;

  value
    ? (li = <li data-notification-type={type}>{value}</li>)
    : (li = (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    ));

  return li;
}

