//
// Created by clarkchenwang on 7/6/16.
//

#include "esUtil.h"
#include "MoreTeapotsRenderer.h"

typedef struct
{
    GLuint programObject;
} UserData;

//-------------------------------------------------------------------------
// Constants
//-------------------------------------------------------------------------
const int32_t NUM_TEAPOTS_X = 8;
const int32_t NUM_TEAPOTS_Y = 8;
const int32_t NUM_TEAPOTS_Z = 8;

static ESContext context;
//static UserData userData;

class Engine {
    MoreTeapotsRenderer renderer_;
    ESContext* esContext;

    bool initialized_resources_;
    bool has_focus_;

    ndk_helper::PerfMonitor monitor_;

public:
    Engine();
    ~Engine();

    int InitDisplay();
    void LoadResources();
    void UnloadResources();
//    void DrawFrame();
//    void TermDisplay();
//    void TrimMemory();
//    bool IsReady();
    void registerCallback();
};

Engine::Engine()
        : initialized_resources_(false),
          has_focus_(false)
{
    esContext = &context;
}

Engine::~Engine() { }

void Engine::LoadResources() {
    renderer_.Init(NUM_TEAPOTS_X, NUM_TEAPOTS_Y, NUM_TEAPOTS_Z);
}

void Engine::UnloadResources() { renderer_.Unload(); }

int Engine::InitDisplay() {
    esInitContext(esContext);
//    esContext->userData = &userData;
    esCreateWindow(esContext, "Teapots", 800, 600, ES_WINDOW_RGB);

    LoadResources();
    initialized_resources_ = true;

    // Initialize GL state.
    glEnable(GL_CULL_FACE);
    glEnable(GL_DEPTH_TEST);
    glDepthFunc(GL_LEQUAL);

    glViewport(0, 0, esContext->width, esContext->height);
    renderer_.UpdateViewport();

    return 0;
}

void Engine::registerCallback() {
    esRegisterUpdateFunc(esContext, renderer_.Update);
    esRegisterDrawFunc(esContext, renderer_.Render);
    esMainLoop(esContext);
}

Engine g_engine;
int main (int argc, char *argv[])
{
    g_engine.InitDisplay();
    g_engine.registerCallback();
}

