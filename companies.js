export const company = {
  name: "Main Company",
  type: "Parent Company",
  platform: "Ticket Selling Platform",
  sellsSolution: "Ticket Selling Solution",
  clients: [
    {
      name: "Client 1",
      type: "subCompany",
      uses: "Ticket Selling Software",
      sells: "Ticket Selling Solution",
      partners: [
        {
          name: "Client 1.1",
          type: "subSubCompany",
          uses: "Ticket Selling Solution",
          sells: "Ticket Selling Solution",
        },
        {
          name: "Client 1.2",
          type: "subSubCompany",
          uses: "Ticket Selling Solution",
          sells: "Ticket Selling Solution",
          partners: [
            {
              name: "Client 1.2.3",
              type: "subSubCompany",
              uses: "Ticket Selling Solution",
              sells: "Ticket Selling Solution",
            },
            {
              name: "Client 1.2.4",
              type: "subSubCompany",
              uses: "Ticket Selling Solution",
              sells: "Ticket Selling Solution",
            },
          ],
        },
      ],
    },
    {
      name: "Client 2",
      type: "subCompany",
      uses: "Ticket Selling Software",
      sells: "Ticket Selling Solution",
      partners: [
        {
          name: "Client 2.1",
          type: "subSubCompany",
          uses: "Ticket Selling Solution",
          sells: "Ticket Selling Solution",
        },
      ],
    },
  ],
};

