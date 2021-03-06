'use strict';

(function() {
  angular.module('MedEx').service('ApiService', [
    '$q',
    '$http',
    'baseUrl',
    ApiService
  ]);

  function ApiService(
    $q,
    $http,
    baseUrl,
    ApiService
  ) {

    var post = function(url, params, options) {
      var deferred = $q.defer();
      $http.post(url, params, options)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject("data");
        });
      return deferred.promise;
    }

    var get = function(url, params, options) {
      var deferred = $q.defer();
      $http.get(url, params)
        .success(function(data, options) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject("data");
        });
      return deferred.promise;
    }

    var put = function(url, params, options) {
      var deferred = $q.defer();
      $http.put(url, params)
        .success(function(data, options) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject("data");
        });
      return deferred.promise;
    }

    var del = function(url, params, options) {
      var deferred = $q.defer();
      $http.delete(url, params)
        .success(function(data, options) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject("data");
        });
      return deferred.promise;
    }

    return {

      get : function(url, params, options) {
        var url = baseUrl + url;
        return get(url, params, options);
      },

      post : function(url, params, options) {
        var url = baseUrl + url;
        return post(url, params, options);
      },

      put : function(url, params, options) {
        var url = baseUrl + url;
        return put(url, params, options);
      },

      del : function(url, params, options) {
        var url = baseUrl + url;
        return del(url, params, options);
      },
    }
  }

})();
