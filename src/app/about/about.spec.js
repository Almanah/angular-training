describe('controllers', function(){
    beforeEach(module('trainingapp.controllers'));   
    describe('about controller', function(){
        var scope;
        beforeEach(inject(function($rootScope, $controller){
            scope = $rootScope.$new();
            $controller('about', {
                $scope: scope
            });
        }));
        it('should contain initial text', function(){
            expect(scope.about).toBe('hello from the about page!');
        });
    });
});