import assert from 'assert';
import xs from 'xstream';

import { assertSourcesSinks } from '../../test-helpers';
import * as ActionTypes from '../../ActionTypes';
import * as actions from '../../actions';

import { fetchThoughts, createThought, forgetThought } from '../../cycle';

describe('Cycles', () => {
  describe('fetchThoughts', () => {
    it('should emit HTTP requests given ACTIONs', done => {
      const actionSource = {
        a: actions.requestThoughts()
      };

      const httpSource = {
        select: () => null
      };

      const httpSink = {
        x: {
          url: '/thoughts?sort=creationTime,desc',
          category: 'thoughts'
        }
      };

      assertSourcesSinks(
        {
          ACTION: { 'a|': actionSource },
          HTTP: { '-|': httpSource }
        },
        {
          HTTP: { 'x|': httpSink }
        },
        fetchThoughts,
        done
      );
    });

    it('should emit ACTION given HTTP response', done => {
      const actionSource = {
        a: actions.requestThoughts()
      };

      const response = { body: { _embedded: { thoughts: [{ id: 1 }] } } };

      const actionSink = {
        a: actions.receiveThoughts(response.body)
      };

      const httpSource = {
        select: () => ({
          r: xs.of(response)
        })
      };

      assertSourcesSinks(
        {
          ACTION: { 'a|': actionSource },
          HTTP: { 'r|': httpSource }
        },
        {
          ACTION: { 'a|': actionSink }
        },
        fetchThoughts,
        done
      );
    });
  });

  describe('createThought', () => {
    it('should emit HTTP requests given ACTIONs', done => {
      const thought = {
        category: 'work',
        text: 'Original thought.'
      };

      const actionSource = {
        a: actions.createThought(thought)
      };

      const httpSource = {
        select: () => null
      };

      const httpSink = {
        x: {
          url: '/thoughts',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          send: thought,
          category: 'create-thought'
        }
      };

      assertSourcesSinks(
        {
          ACTION: { 'a|': actionSource },
          HTTP: { '-|': httpSource }
        },
        {
          HTTP: { 'x|': httpSink }
        },
        createThought,
        done
      );
    });

    it('should emit ACTION given HTTP response', done => {
      const actionSource = {
        a: actions.createThought({})
      };

      const response = { body: { id: 1 } };

      const actionSink = {
        a: actions.successfullyCreatedThought(response.body)
      };

      const httpSource = {
        select: () => ({
          r: xs.of(response)
        })
      };

      assertSourcesSinks(
        {
          ACTION: { 'a|': actionSource },
          HTTP: { 'r|': httpSource }
        },
        {
          ACTION: { 'a|': actionSink }
        },
        createThought,
        done
      );
    });
  });

  describe('forgetThought', () => {
    it('should emit HTTP requests given ACTIONs', done => {
      const actionSource = {
        a: actions.forgetThought(1)
      };

      const httpSource = {
        select: () => null
      };

      const httpSink = {
        x: {
          url: '/thoughts/1',
          method: 'DELETE',
          category: 'delete-thought'
        }
      };

      // Asserts that the sources, trigger the provided sinks,
      // when executing the fetchReposByUser function
      assertSourcesSinks(
        {
          ACTION: { 'a|': actionSource },
          HTTP: { '-|': httpSource }
        },
        {
          HTTP: { 'x|': httpSink }
        },
        forgetThought,
        done
      );
    });

    it('should emit ACTION given HTTP response', done => {
      const id = 1;

      const actionSource = {
        a: actions.forgetThought(id)
      };

      const response = {};

      const actionSink = {
        a: actions.forgotThought(id)
      };

      const httpSource = {
        select: () => ({
          r: xs.of(response)
        })
      };

      assertSourcesSinks(
        {
          ACTION: { 'a|': actionSource },
          HTTP: { 'r|': httpSource }
        },
        {
          ACTION: { 'a|': actionSink }
        },
        forgetThought,
        done
      );
    });
  });
});
