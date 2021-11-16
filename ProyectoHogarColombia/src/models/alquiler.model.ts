import {Entity, model, property} from '@loopback/repository';

@model()
export class Alquiler extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_inmueble: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha_entrega: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha_recibido: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  codeudor: string;

  @property({
    type: 'string',
    required: true,
  })
  carta_laboral: string;

  @property({
    type: 'string',
    required: true,
  })
  id_empleado: string;


  constructor(data?: Partial<Alquiler>) {
    super(data);
  }
}

export interface AlquilerRelations {
  // describe navigational properties here
}

export type AlquilerWithRelations = Alquiler & AlquilerRelations;
