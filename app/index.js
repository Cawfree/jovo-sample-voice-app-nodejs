import { Jovo as app } from 'jovo-framework'
import handlers from './handlers'

export default function handler(event, context) {
  app.handleRequest(event, context, handlers);
  app.execute();
}
