export const mockPostUserLogin = (username, password) => {
  if (username === 'admin' && password === 'admin') {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.1sBNVFZs67RWole33uQsvAoo4yt-WJmMF9bGh-TTL4w';

  } else if (username == 'user' && password == 'user') {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiVXNlciJ9.bBlJzzxMMG10s4cxuUHUyFPJ2i2BW4ogPR_NjCZPwi4';
  }
};

