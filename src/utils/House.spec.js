import { House } from "./House";

describe("House", () => {
  let house;

  beforeEach(() => {
    house = new House(4);
  });

  it("create severals rooms", () => {
    expect(house.countRooms()).toEqual(4);
  });

  it("can add members to the house", () => {
    house.addMember(1);

    expect(house.countMembers()).toEqual(1);
  });

  it("can add several members to the house", () => {
    house.addMember(1);
    house.addMember(1);
    house.addMember(1);

    expect(house.countMembers()).toEqual(3);
  });

  it("adds the maximum of members", () => {
    house.addMember(6);

    expect(house.countMembers()).toEqual(4);
  });
});
