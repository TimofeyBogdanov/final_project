const authDrop = (setter, redirection) => {
  localStorage.setItem("TOKEN", "");
  localStorage.setItem("EXPIRE", "");
  localStorage.setItem("AuthStatus", false);
  localStorage.setItem("CompaniesUsed", "");
  localStorage.setItem("CompaniesLimit", "");
  setter(false);
  redirection("/");
}

export default authDrop;