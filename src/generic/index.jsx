import { notification } from "antd";

notification.config({
  placement: "topRight",
  duration: 3,
});

// custom notify
const useNotification = () => {
  const notify = (type) => {
    switch (type) {
      case "login":
        return notification.success({
          message: "Tizimga muvaffaqiyatli kirdingiz!",
          className: "custom-notification",
        });
      case "loginError":
        return notification.error({
          message: "Email yoki parol noto'g'ri!",
          className: "custom-notification",
        });
      case "register":
        return notification.success({
          message: "Ro'yxatdan muvaffaqiyatli o'tdingiz!",
          className: "custom-notification",
        });
      case "registerError":
        return notification.error({
          message: "Foydalanuvchi allaqachon mavjud!",
          className: "custom-notification",
        });
      default:
        return notification.info({
          message: "Noma’lum holat yuz berdi!",
          className: "custom-notification",
        });
    }
  };

  return notify;
};

export default useNotification;
