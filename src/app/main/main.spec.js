describe('controllers', function(){
    beforeEach(module('trainingapp.controllers'));
    describe('main controller', function(){
        var scope;
        beforeEach(inject(function($rootScope, $controller){
            scope = $rootScope.$new();
            $controller('main', {
                $scope: scope
            });
        }));
        it('should contain initial text', function(){
            expect(scope.main).toBe('hello from the main page!');
        });
    });
});
