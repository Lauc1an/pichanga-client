import * as Device from "expo-device";
import { API_URL, FETCH_HEADERS } from "@/src/utils/Constants";
import { RegisterUserData } from "@/src/utils/Types";

export const fetchLogin = async (username: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}api/client/login`, {
      method: "POST",
      headers: FETCH_HEADERS,
      body: JSON.stringify({
        username,
        password,
        device: Device.brand ? Device.brand : "myweb",
      }),
    });

    return await response.json();
  } catch (error) {
    console.log("🚩 ~ models/Auth.ts ~ fetchLogin() ~ error:", error);
    return { status: false };
  }
};

export const fetchRegister = async (data: RegisterUserData) => {
  try {
    const response = await fetch(`${API_URL}api/client/register`, {
      method: "POST",
      headers: FETCH_HEADERS,
      body: JSON.stringify({
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        district: data.district,
        password: data.password,
        password_confirmation: data.password_confirmation,
        checkbox: data.checkbox,
        device: Device.brand ? Device.brand : "myweb",
      }),
    });

    return await response.json();
  } catch (error) {
    console.log("🚩 ~ models/Auth.ts ~ fetchRegister() ~ error:", error);
    return { status: false };
  }
};

export const fetchUser = async (id: string, token: string | null) => {
  try {
    const response = await fetch(`${API_URL}api/client/profile/${id}`, {
      method: "GET",
      headers: {
        ...FETCH_HEADERS,
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.log("🚩 ~ models/Auth.ts ~ fetchUser() ~ error:", error);
    return { status: false };
  }
};

export const fetchNewPassword = async (email: string, oldPassword: string, newPassword: string) => {
  const response = await fetch(`${API_URL}api/client/reset-password`, {
    method: "POST",
    headers: FETCH_HEADERS,
    body: JSON.stringify({
      email,
      password: oldPassword,
      new_password: newPassword,
    }),
  });

  return await response.json();
};