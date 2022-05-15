import axios from "axios";
import { url, tokenByClass } from "../constants/configUrl";
import { localStorageServices } from "./localStorageServices";

export const ticketManagerServices = {
  getTicketList() {
    return axios({
      url: `${url}/api/tickets`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  getDetailsTicket(_idTicket) {
    return axios({
      url: `${url}/api/tickets/${_idTicket}`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  updateDetailsTicket(_idTicket) {
    return axios({
      url: `${url}/api/tickets/${_idTicket}`,
      method: "PUT",
      headers: {
        token: localStorageServices.getToken(),
        tokenByClass,
      },
    });
  },
  deleteTicket(_idTicket) {
    return axios({
      url: `${url}/api/tickets/${_idTicket}`,
      method: "DELETE",
      headers: {
        token: localStorageServices.getToken(),
        tokenByClass,
      },
    });
  },
  createTicket() {
    return axios({
      url: `${url}/api/tickets`,
      method: "POST",
      headers: {
        token: localStorageServices.getToken(),
        tokenByClass,
      },
    });
  },
  getTicketListOfUser(_idUser) {
    return axios({
      url: `${url}/api/tickets/by-user?userId=${_idUser}`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
  getTicketListOfRoom(_idRoom) {
    return axios({
      url: `${url}/api/tickets/by-room?roomId=${_idRoom}`,
      method: "GET",
      headers: {
        tokenByClass,
      },
    });
  },
};
