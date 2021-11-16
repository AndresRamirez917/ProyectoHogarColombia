import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MomgodbDataSource} from '../datasources';
import {Alquiler, AlquilerRelations} from '../models';

export class AlquilerRepository extends DefaultCrudRepository<
  Alquiler,
  typeof Alquiler.prototype.id,
  AlquilerRelations
> {
  constructor(
    @inject('datasources.momgodb') dataSource: MomgodbDataSource,
  ) {
    super(Alquiler, dataSource);
  }
}
