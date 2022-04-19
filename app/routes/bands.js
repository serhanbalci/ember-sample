import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export class Band {
  @tracked name;
  @tracked songs;

  constructor({ id, name, songs }) {
    this.id = id;
    this.name = name;
    this.songs = songs || [];
  }
}

export class Song {
  constructor({ title, rating, band }) {
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
  }
}

export default class BandsRoute extends Route {
  @service catalog;

  model() {
    return this.catalog.fetchAll('bands');
  }
}
