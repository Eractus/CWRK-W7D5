export const signup =  (user) => {
  return (
    $.ajax({
      url: '/api/users',
      method: "POST",
      data: {user},
    })
  );
};

export const signin =  (user) => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
  })
);


export const signout =  () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
);
