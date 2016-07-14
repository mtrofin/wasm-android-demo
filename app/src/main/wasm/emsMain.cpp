//
// Created by clarkchenwang on 7/6/16.
//

#include "esUtil.h"
#include <sys/time.h>
#include "MoreTeapotsRenderer.h"
#include <emscripten/emscripten.h>

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
static MoreTeapotsRenderer renderer;

void Renderer_Update_Wrapper(ESContext* context, float dtime){
    renderer.Update(dtime);
}

void Renderer_Render_Wrapper(ESContext* context){
    renderer.Render();
}

class Engine {
    MoreTeapotsRenderer* renderer_;
    ESContext* esContext;

    bool initialized_resources_;
public:
    Engine();
    ~Engine();

    int InitDisplay();
    void LoadResources();
    void UnloadResources();
    void registerCallback();
};

Engine::Engine()
        : initialized_resources_(false)
{
    esContext = &context;
    renderer_ = &renderer;
}

Engine::~Engine() { }

void Engine::LoadResources() {
    renderer_->Init(NUM_TEAPOTS_X, NUM_TEAPOTS_Y, NUM_TEAPOTS_Z);
}

void Engine::UnloadResources() { renderer_->Unload(); }

int Engine::InitDisplay() {
    esInitContext(esContext);
//    esContext->userData = &userData;
    esCreateWindow(esContext, "Teapots", 1080, 1920, ES_WINDOW_RGB);

    LoadResources();
    initialized_resources_ = true;

    // Initialize GL state.
    glEnable(GL_CULL_FACE);
    glEnable(GL_DEPTH_TEST);
    glDepthFunc(GL_LEQUAL);

    glViewport(0, 0, esContext->width, esContext->height);
    renderer_->UpdateViewport();

    return 0;
}

void Engine::registerCallback() {
    esRegisterUpdateFunc(esContext, Renderer_Update_Wrapper);
    esRegisterDrawFunc(esContext, Renderer_Render_Wrapper);
}

Engine g_engine;
struct timeval t1, t2;
struct timezone tz;
float deltatime;
float totaltime = 0.0f;
unsigned int seconds_count = 0;
unsigned int frames = 0;
unsigned int totalframes = 0;


void one_iter() {
    gettimeofday(&t2, &tz);
    deltatime = (float)(t2.tv_sec - t1.tv_sec + (t2.tv_usec - t1.tv_usec) * 1e-6);
    t1 = t2;

    if (context.updateFunc != NULL)
        context.updateFunc(&context, deltatime);
    if (context.drawFunc != NULL)
        context.drawFunc(&context);

    eglSwapBuffers(context.eglDisplay, context.eglSurface);

    totaltime += deltatime;
    frames++;
    if (totaltime >  60.0f)
    {
        printf("%4d frames rendered in %1.4f seconds -> FPS=%3.4f\n", frames, totaltime, frames/totaltime);
        totaltime -= 60.0f;

        // seconds_count++;
        // totalframes += frames;
        // if (seconds_count % 60 == 0) {
        //     printf("AVERAGE FPS = %3.4f FOR THE PAST ONE MINUTE\n", totalframes/60.0f);
        //     totalframes = 0;
        // }

        frames = 0;
    }
}

int main (int argc, char *argv[])
{
    g_engine.InitDisplay();
    g_engine.registerCallback();
    gettimeofday ( &t1 , &tz );
    emscripten_set_main_loop(one_iter, 20, 1);
}

