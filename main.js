
function login(e) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = {
        username : username,
        password : password,
    };
   
    if (!user) {
      alert("Tài khoản và mật khẩu không được bỏ trống!");
    } else if ( 
        // đổi mật khẩu và tài khoản tại đây
      username == "dang" &&
      
      password == "dang"
    ) {
      alert("Đăng nhập thành công!");
      window.location.href = "scoreboard.html";
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác!");
    }
  }