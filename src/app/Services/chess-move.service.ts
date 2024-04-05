import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ChessMoveService {
private apiUrl = "https://polyglot-spa-test.azurewebsites.net";
  constructor() { }
  public async getNextMove(gameFen: object) {
    const response = await axios.post(this.apiUrl, gameFen);
    return response.data;
  }
}
