export class House {
  constructor(rooms) {
    this.rooms = rooms;
    this.membersAccount = 0;
  }

  countRooms() {
    return this.rooms;
  }

  addMember(amount) {
    const total = this.membersAccount + amount;
    this.membersAccount = Math.min(total, this.rooms);
  }

  countMembers() {
    return this.membersAccount;
  }
}
