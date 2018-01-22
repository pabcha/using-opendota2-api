export interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  base_attack_max: number;
  base_attack_min: number;
  attack_rate: number;
  attack_range: number;
  base_armor: number;
  base_mr: number;
  move_speed: number;
  base_mana: number;
  base_mana_regen: number;
  base_health: number;
  base_health_regen: number;
  roles: string[];
  attack_type: string;
  img: string;
  icon: string;
}