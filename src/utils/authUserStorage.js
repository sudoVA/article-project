export function getAuthUser() {
  return localStorage.getItem("authUser");
}

export function setAuthUser(authUser) {
  localStorage.setItem("authUser", token);
}

export function removeAuthUser() {
  localStorage.removeItem("authUser");
}
