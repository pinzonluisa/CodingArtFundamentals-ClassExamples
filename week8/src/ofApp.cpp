#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
	ofBackground(255, 60, 100);
	movers.clear();
	randShape.clear();
	randSize.clear();
	//Fbo object setup
	fbo.allocate(ofGetWidth(), ofGetHeight(), GL_RGBA);

	fbo.begin();
	
	ofClear(255, 60, 100, 255);   // paint the starting background once
	fbo.end();
	
	numMovers = 50;
	
	for(int i = 0; i < numMovers; i++){
		movers.push_back(mover());
		randShape.push_back(ofRandom(2,10));
		randSize.push_back(ofRandom(5,10));
		
	}

}

//--------------------------------------------------------------
void ofApp::draw(){
	
	fbo.begin();
	ofFill();
		ofSetColor(255, 60, 100, 10);
		ofDrawRectangle(0, 0, fbo.getWidth(), fbo.getHeight());

	
	for (int i = 0; i < numMovers; i++)
	{
		movers[i].display(randShape[i],randSize[i]);
		movers[i].update();
		movers[i].KeepInCanvas();
	}
	
	fbo.end();

	ofSetColor(255);   // white, so the FBO draws with its real colors
	
	
	fbo.draw(0, 0);
	

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){
	
	fbo.allocate(w, h, GL_RGBA);
	fbo.begin();
	ofClear(255, 60, 100, 255);
	fbo.end();

}

void ofApp::keyPressed(int key){
	if(key == 'r'){
		setup();
	}
}

