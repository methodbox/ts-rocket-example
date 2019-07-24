export type Mission = {
  flight_number: number;
  mission_name: string;
  mission_id: Array<string>;
  launch_year: string;
  launch_date_unix: number;
  is_tentative: boolean;
  tbd: boolean;
  launch_window: number;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    payload_mass_kg: number;
  };
  ships: Array<string>;
  launch_site: {
    site_name_long: string;
  };
  launch_success: boolean;
  links: {
    mission_patch: string;
    mission_patch_small: string;
    flickr_images: Array<string>;
  };
  details: string;
};

export const mission: Mission = {
  flight_number: 65,
  mission_name: 'Telstar 19V',
  mission_id: ['F4F83DE'],
  launch_year: '2018',
  launch_date_unix: 1532238600,
  is_tentative: false,
  tbd: false,
  launch_window: 7200,
  rocket: {
    rocket_id: 'falcon9',
    rocket_name: 'Falcon 9',
    payload_mass_kg: 7076,
  },
  ships: ['GOPURSUIT', 'GOQUEST', 'HAWK', 'OCISLY'],
  launch_site: {
    site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40',
  },
  launch_success: true,
  links: {
    mission_patch: 'https://images2.imgbox.com/c5/53/5jklZkPz_o.png',
    mission_patch_small: 'https://images2.imgbox.com/12/7c/NiniYxoh_o.png',
    flickr_images: [
      'https://farm1.staticflickr.com/856/28684550147_49802752b3_o.jpg',
      'https://farm1.staticflickr.com/927/28684552447_956a9744f1_o.jpg',
      'https://farm2.staticflickr.com/1828/29700007298_8ac5891d2c_o.jpg',
      'https://farm1.staticflickr.com/914/29700004918_31ed7b73ef_o.jpg',
      'https://farm1.staticflickr.com/844/29700002748_3047e50a0a_o.jpg',
      'https://farm2.staticflickr.com/1786/29700000688_2514cd3cbb_o.jpg',
    ],
  },
  details:
    'SSL-manufactured communications satellite intended to be placed at 63° West over the Americas. At 7,075 kg, it became the heaviest commercial communications satellite ever launched.',
};

export default mission;
